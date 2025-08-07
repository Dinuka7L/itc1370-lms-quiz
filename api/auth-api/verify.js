// Authentication API - Token verification endpoint
const AuthUtils = require('../../shared/utils/auth');
const DatabaseUtils = require('../../shared/utils/database');
const User = require('../../shared/models/User');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const authHeader = req.headers['authorization'];
    const token = AuthUtils.extractTokenFromHeader(authHeader);

    if (!token) {
      return res.status(401).json({ 
        error: 'Access token required' 
      });
    }

    // Verify token
    const decoded = AuthUtils.verifyAccessToken(token);

    // Connect to database and get fresh user data
    await DatabaseUtils.connect();
    const user = await User.findById(decoded.id).select('-password');

    if (!user || !user.isActive) {
      return res.status(401).json({ 
        error: 'User not found or inactive' 
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        role: user.role,
        profilePicture: user.profilePicture,
        preferences: user.preferences,
        stats: user.stats
      }
    });

  } catch (error) {
    console.error('Token verification error:', error);
    
    if (error.message.includes('Invalid or expired')) {
      return res.status(401).json({ 
        error: 'Invalid or expired token' 
      });
    }

    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
};
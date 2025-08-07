# Deployment Guide

This guide covers deploying the LMS Platform to Vercel with proper environment configuration.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas**: Set up a cluster at [mongodb.com](https://mongodb.com)
3. **Domain** (optional): For custom domain setup

## Environment Variables

Set these environment variables in your Vercel dashboard:

### Required Variables
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms-platform
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
JWT_REFRESH_SECRET=your-super-secret-refresh-key-minimum-32-characters
```

### Optional Variables
```bash
JWT_EXPIRES_IN=7d
JWT_REFRESH_EXPIRES_IN=30d
NODE_ENV=production
```

## Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
# From project root
vercel --prod
```

### 4. Configure Environment Variables
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all required variables

### 5. Redeploy
```bash
vercel --prod
```

## Database Setup

### 1. MongoDB Atlas Configuration
1. Create a new cluster
2. Create a database user
3. Whitelist Vercel's IP addresses (or use 0.0.0.0/0 for all IPs)
4. Get your connection string

### 2. Database Initialization
The database will be automatically initialized when the first API call is made. Models will be created automatically.

## Domain Configuration

### Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Subdomains
- Main LMS: `app.yourdomain.com`
- Admin Panel: `admin.yourdomain.com`
- Creator Portal: `creator.yourdomain.com`

## Security Considerations

### JWT Secrets
- Use strong, random secrets (minimum 32 characters)
- Never commit secrets to version control
- Rotate secrets periodically

### CORS Configuration
- Configure allowed origins in production
- Restrict to your actual domains

### Rate Limiting
Consider implementing rate limiting for API endpoints in production.

## Monitoring

### Vercel Analytics
Enable Vercel Analytics for performance monitoring.

### Error Tracking
Consider integrating with services like:
- Sentry
- LogRocket
- Datadog

## Backup Strategy

### Database Backups
- Enable MongoDB Atlas automated backups
- Consider point-in-time recovery
- Test restore procedures

### Code Backups
- Use Git for version control
- Tag releases
- Maintain staging environment

## Performance Optimization

### Frontend
- Enable Vercel's Edge Network
- Optimize images and assets
- Use code splitting

### API
- Implement caching where appropriate
- Optimize database queries
- Use connection pooling

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Check MongoDB URI format
   - Verify IP whitelist
   - Check user permissions

2. **JWT Token Issues**
   - Verify secret configuration
   - Check token expiration
   - Validate token format

3. **CORS Errors**
   - Configure allowed origins
   - Check request headers
   - Verify preflight requests

### Logs
Access logs in Vercel dashboard under Functions tab.

## Scaling Considerations

### Database
- Monitor connection limits
- Consider read replicas for heavy read workloads
- Implement proper indexing

### API
- Vercel Functions auto-scale
- Monitor cold start times
- Consider edge functions for global performance

### Frontend
- Use CDN for static assets
- Implement proper caching headers
- Monitor Core Web Vitals
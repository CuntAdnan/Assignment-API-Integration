const authenticate = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    const validApiKey = process.env.API_KEY;
  
    if (apiKey && apiKey === validApiKey) {
      next(); 
    } else {
      res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
  };

module.exports=authenticate;
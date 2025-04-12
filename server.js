const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 7000;

// routes will go here
app.get('/api/getUserInfo', function(req, res) {
    const username = req.query.username;
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + username,
        headers: { 
          'User-Agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)', 
          'Cookie': 'csrftoken=zF0rRqCDdcC2WJFDZ5PEJqzRnFznheqM; ig_did=AC8D8820-2DDC-4930-A5EC-9D5BBFD92895; ig_nrcb=1; mid=Z7WxKgAEAAEs5COrTvqYvBcJQ0_P'
        }
      };

      axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        res.send(response.data);
        })
        .catch((error) => {
        console.log(error);
        res.send(error);
        });

    
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);
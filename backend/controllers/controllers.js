const axios = require('axios');
const HttpError = require('../models/http-error');

exports.getSubscriber = async (req,res,next) => {
    try{
		const response = await axios.get(process.env.CLOUDONIX_GET_CALLER_URL, {
			headers: {
			  'Authorization': `Bearer ${process.env.CLOUDONIX_API_KEY}`
			}
		  });
		  res.send(response.data);
		  
	}catch(err){
        return next(new HttpError('Something went wrong, please try again', 500));
	}
}

exports.getCallToken = async (req, res, next) => {
	try{
		const data = {
			destination: 7890,
			callerId: 1234
		}
		const response = await axios.post(process.env.CLOUDONIX_MAKE_CALL_URL, data, {
			headers: {
			  'Authorization': `Bearer ${process.env.CLOUDONIX_API_KEY}`
			}
		  });
		  res.send({callToken: response.data.token});
		  
	}catch(err){
        return next(new HttpError('Something went wrong, please try again', 500));
	}
}
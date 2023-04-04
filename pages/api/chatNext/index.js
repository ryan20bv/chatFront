import axios from "axios";

const chatHandler = async (req, res) => {
	try {
		const { data } = await axios("http://localhost:5000/api/chat");
		res.status(200).json(data);
	} catch (err) {
		console.log(err.message);
	}
};
export default chatHandler;

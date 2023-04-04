import axios from "axios";

const chatHandler = async (req, res) => {
	if (req.method === "POST") {
		const newChat = req.body;

		try {
			const { data } = await axios.post("http://localhost:5000/api/chat", newChat);
			res.status(201).json({ message: "chat sent!", data });
		} catch (err) {
			console.log(err.message);
		}
	}
	if (req.method === "GET") {
		try {
			const { data } = await axios("http://localhost:5000/api/chat");
			res.status(200).json(data);
		} catch (err) {
			console.log(err.message);
		}
	}
};
export default chatHandler;

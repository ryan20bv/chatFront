import axios from "axios";

const handler = async (req, res) => {
	// console.log(req.query);
	const { chatId } = req.query;
	if (req.method === "DELETE") {
		const { data } = await axios.delete(
			`http://localhost:5000/api/chat/${chatId}`
		);

		res.status(200).json(data);
	}
};
export default handler;

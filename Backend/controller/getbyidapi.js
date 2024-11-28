
const user = require("../model/user");

const userdatagetbyid = async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);

        const getbyid = await user.findOne({ _id: _id });
        if (!getbyid) {
            return res
                .status(400)
                .send({ success: false, error: "User Not Found" }); G
        }
        return res
            .status(200)
            .send({ success: true, user: getbyid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = {
    userdatagetbyid
}
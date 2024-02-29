const getUserData = async (req, res) => {
    setTimeout(() => {

        return res.status(200).json({ message: "Working Fine" });
    }, 5000)
}

module.exports = {
    getUserData
}
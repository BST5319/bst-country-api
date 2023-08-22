const statesDB = {
    states: require("../models/data.json")
};
const getStateName = async (req, res) => {
    const name = req.params.name;
    if (!name) return res.status(400).json({ "message": "Error! State name is required" });
    const foundState = statesDB.states.find(statename => statename.name === name);
    if (!foundState) return res.status(500).json({ "message": "Sorry! State Not Found" });
    res.json({ "capital": foundState.capital });
};
module.exports = { getStateName };
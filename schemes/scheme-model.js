const db = require("../data/config");

const find = () => {
    return db("schemes").select();
};

const findById = id => {
    return db("schemes").where({ id });
};

const findSteps = id => {
    return db("schemes as s")
        .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
        .join("steps as st", "s.id", "st.scheme_id")
        .where("s.id", id)
        .orderBy("st.step_number");
};

const add = scheme => {
    return db("schemes").insert(scheme);
};

// const addStep = step => {
//     return db("schemes").insert(step)
// }

const update = (changes, id) => {
    return db("schemes").update(changes).where({ id: id });
};

const remove = id => {
    return db("schemes").del(id).where({ id: id });
};

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    // addStep
};

import { Schema, model, Types} from "mongoose";
import normalize from "normalize-mongoose";

const recipeSchema = new Schema({
    name: { type: String, unique: true, required: true },
    category: {type: String, required: true},
    description: {type: String, required: true},
    ingredients: [{ type: String }],
    image:{type: String, required:true},
    favourite: {type: Boolean, default: false}

}, {
    timestamps: true
});

export const RecipeModel = model('Recipe', recipeSchema);
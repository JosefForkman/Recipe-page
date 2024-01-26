import omelette from "./assets/images/image-omelette.jpeg";
import "./styles/main.scss";

function App() {
    return (
        <main>
            <img src={omelette} alt="" />
            <div className="wrapper padding-block-500 padding-inline-400">
                <h1 className="text-DarkCharcoal">Simple Omelette Recipe</h1>
                <p className="WengeBrown">
                    An easy and quick dish, perfect for any meal. This classic
                    omelette combines beaten eggs cooked to perfection,
                    optionally filled with your choice of cheese, vegetables, or
                    meats.
                </p>

                <section className="bg-RoseWhite padding-400" aria-labelledby="Preparation">
                    <h2 className="text-Nutmeg" id="Preparation">
                        Preparation time
                    </h2>
                    <ul className="text-WengeBrown">
                        <li>
                            <b>Total:</b> Approximately 10 minutes
                        </li>
                        <li>
                            <b>Preparation:</b> 5 minutes
                        </li>
                        <li>
                            <b>Cooking:</b> 5 minutes
                        </li>
                    </ul>
                </section>

                <section aria-labelledby="Ingredients">
                    <h2 className="text-Nutmeg" id="Ingredients">
                        Ingredients
                    </h2>
                    <ul className="text-WengeBrown">
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>
                            Optional fillings: cheese, diced vegetables, cooked
                            meats, herbs
                        </li>
                    </ul>
                </section>

                <hr className="border-LightGrey" />

                <section aria-labelledby="Instructions">
                    <h2 className="text-Nutmeg" id="Instructions">
                        Instructions
                    </h2>
                    <ol className="text-WengeBrown">
                        <li>
                            <b>Beat the eggs:</b> In a bowl, beat the eggs with
                            a pinch of salt and pepper until they are well
                            mixed. You can add a tablespoon of water or milk for
                            a fluffier texture.
                        </li>
                        <li>
                            <b>Heat the pan:</b> Place a non-stick frying pan
                            over medium heat and add butter or oil.
                        </li>
                        <li>
                            <b>Cook the omelette:</b> Once the butter is melted
                            and bubbling, pour in the eggs. Tilt the pan to
                            ensure the eggs evenly coat the surface.
                        </li>
                        <li>
                            <b>Add fillings (optional):</b> When the eggs begin
                            to set at the edges but are still slightly runny in
                            the middle, sprinkle your chosen fillings over one
                            half of the omelette.
                        </li>
                        <li>
                            <b>Fold and serve:</b> As the omelette continues to
                            cook, carefully lift one edge and fold it over the
                            fillings. Let it cook for another minute, then slide
                            it onto a plate.
                        </li>
                        <li>
                            <b>Enjoy:</b> Serve hot, with additional salt and
                            pepper if needed.
                        </li>
                    </ol>
                </section>

                <hr className="border-LightGrey" />

                <section aria-labelledby="Nutrition">
                    <h2 className="text-Nutmeg" id="Nutrition">
                        Nutrition
                    </h2>
                    <p>
                        The table below shows nutritional values per serving
                        without the additional fillings.
                    </p>
                    <table>
                        <thead>
                            <tr className="sr-only">
                                <th>Type</th>
                                <th>value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Calories</td>
                                <td className="text-Nutmeg">
                                    <b>277kcal</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Carbs</td>
                                <td className="text-Nutmeg">
                                    <b>0g</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td className="text-Nutmeg">
                                    <b>20g</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td className="text-Nutmeg">
                                    <b>22g</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
}

export default App;

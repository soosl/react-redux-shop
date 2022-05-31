import React, { useState } from "react";

import "./index.scss";

// import "bootstrap/dist/css/bootstrap.min.css";

import { MinMax } from "./MinMax/MinMax";
import { MyModal } from "./Modal";

export const App = () => {
    const [products, setProducts] = useState(getState());

    const totalSum = products.reduce(
        (acc, curProduct) => acc + curProduct.cnt * curProduct.price,
        0
    );

    // const totalSum = useMemo(
    //     () =>
    //         products.reduce(
    //             (acc, curProduct) => acc + curProduct.cnt * curProduct.price,
    //             0
    //         ),
    //     [products]
    // );

    const setProductsCount = (cnt, id) => {
        setProducts(
            products.map(product =>
                product.id !== id
                    ? product
                    : {
                          ...product,
                          cnt,
                      }
            )
        );
    };

    const removeProduct = id => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <>
            <h1 className={"test"}>Products list</h1>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Price</th>
                        <th>Cnt</th>
                        <th>Total</th>
                    </tr>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                {
                                    <MinMax
                                        max={product.rest}
                                        value={product.cnt}
                                        setValue={cnt =>
                                            setProductsCount(cnt, product.id)
                                        }
                                    />
                                    // <MinMax
                                    //     max={product.rest}
                                    //     value={product.cnt}
                                    //     setValue={cnt =>
                                    //         setCount(cnt, product.id)
                                    //     }
                                    // />
                                }
                            </td>
                            <td>{product.price * product.cnt}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeProduct(product.id)}
                                >
                                    x
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setProductsCount(
                                            product.rest,
                                            product.id
                                        )
                                    }
                                >
                                    MAX
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={5}>
                            <strong>
                                {products.length
                                    ? `Total sum: ${totalSum}`
                                    : "Cart is empty"}
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <MyModal />
        </>
    );
};

const getState = () => [
    { id: 100, title: "Ipnone 200", price: 12000, rest: 10, cnt: 1 },
    { id: 101, title: "Samsung AAZ8", price: 22000, rest: 5, cnt: 1 },
    { id: 103, title: "Nokia 3310", price: 5000, rest: 2, cnt: 1 },
    { id: 105, title: "Huawei ZZ", price: 15000, rest: 8, cnt: 1 },
];

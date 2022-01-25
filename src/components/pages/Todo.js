import React from 'react';
import '../css/styles.css';

function Todo() {


    return (
        <div>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card rounded-3">
                                <div className="card-body p-4">

                                    <h4 className="text-center my-3 pb-3">The TODO App</h4>

                                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input

                                                    type="text"
                                                    id="form1"
                                                    className="form-control"
                                                    placeholder='Enter a task here'

                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary" >Save</button>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-warning" >Get tasks</button>
                                        </div>
                                    </form>

                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>pasear al perro</td>
                                                <td>
                                                    <button type="submit" className="btn btn-danger" >delete</button>
                                                    <button type="submit" className="btn btn-success ms-1">Finish</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>pasear al perro de nuevo</td>
                                                <td>
                                                    <button type="submit" className="btn btn-danger" >delete</button>
                                                    <button type="submit" className="btn btn-success ms-1">Finish</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Todo;

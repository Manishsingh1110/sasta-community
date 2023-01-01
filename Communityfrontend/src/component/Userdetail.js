import widthcontext from '../context/widthcontext';
import { Bar,Line } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from "react";
import Notecontext from '../context/Notecontext';
import 'chart.js/auto'
import {Chart, PointElement} from 'chart.js';
Chart.register(PointElement);
// import { Location } from 'react-router-dom';
function Userdetail() {
    const [value, onChange] = useState(new Date());
    var { wedth } = useContext(widthcontext);
    var context = useContext(Notecontext);
    var { Notebank, Remaind, Quesbank, getloggeduser, loggeduser, Note, Question, Arrangedata } = context
    useEffect(() => {
        getloggeduser()
    }, [])
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    let label = []
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        var Data = [9,1,3,5,7,3,3,1];
        setChartData({
            labels: [11/10,12/10,13/10,14/10,15/10,16/10,17/10,18/10],
            datasets: [
                {
                    label: "count",
                    data: Data,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Your Data",
                },
            },
        });
    }, []);
    let noofsuggestions = 0
    return (
        <>
            <div className="pb-5 text-dark">
                <div className="container-fluid pt-4 px-4">
                    <div className="row">
                        <div className="col-xl-12 ">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                {wedth && (
                                    <figcaption className="text-secondary fs-4 ps-4 col-md-4">
                                        Hii {loggeduser.username}
                                    </figcaption>
                                )}
                                <div className={wedth ? "col-md-3" : " right-0 position-relative d-inline"} >
                                    <figcaption className={wedth ? "blockquote-footer" : "d-flex mt-2"}>
                                        <h6 className="d-inline text-secondary">Userid:- </h6><span className="d-inline text-secondary ms-2">{loggeduser._id}</span>
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid pt-2 px-4">
                    <div className="row">
                        <div className="col-xl-3 p-2">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i className="fa fa-chart-line fa-3x text-primary"></i>
                                <div className="ms-3">
                                    <p className="mb-2">Today Remainders</p>
                                    <h6 className="mb-0">{Remaind.length}</h6>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-3 p-2">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i className="fa fa-chart-bar fa-3x text-primary"></i>
                                <div className="ms-3">
                                    <p className="mb-2">Total Questions</p>
                                    <h6 className="mb-0">{Quesbank.length}</h6>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-3 p-2">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i className="fa fa-chart-area fa-3x text-primary"></i>
                                <div className="ms-3">
                                    <p className="mb-2">Today Notes</p>
                                    <h6 className="mb-0">{Notebank.length}</h6>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-3 p-2">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i className="fa fa-chart-pie fa-3x text-primary"></i>
                                <div className="ms-3">
                                    <p className="mb-2">Total Suggestions</p>
                                    <h6 className="mb-0">{`${noofsuggestions}`}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-xl-6 p-2">
                            <div className="bg-light text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Questions Record</h6>
                                </div>
                                <div className='col-md-12'>
                                    <Bar width="200" height="100" options={chartOptions} data={chartData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 p-2">
                            <div className="bg-light text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Notes Record</h6>

                                </div>
                                <div className='col-md-12'>
                                    <Line width="200" height="100" options={chartOptions} data={chartData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {wedth ? (
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Questions</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                        <th scope="col">Date</th>
                                        <th scope="col text-center" style={{ textAlign: "center" }}>Question</th>
                                        <th scope="col">Suggestion By</th>
                                        <th scope="col">Date</th>
                                        <th scope="col text-break">No of Suggestion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Quesbank.map((item) => {
                                        return (
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" /></td>
                                                <td>{item.question.date}</td>
                                                <td className="text-break">{item.question.questiondata}</td>
                                                <td>
                                                    {item.answer.map((items) => {

                                                        return (
                                                            <>
                                                                <h6>{items.useranswered}</h6>
                                                            </>
                                                        )
                                                    })}
                                                </td>
                                                <td>{item.answer.map((items) => {

                                                    return (
                                                        <>
                                                            <h6>{items.date}</h6>
                                                        </>
                                                    )
                                                })}</td>
                                                <td className="text-center">{item.answer.length}</td>
                                            </tr>

                                        );
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>) : ''}
                {wedth ? (
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Questions</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                        <th scope="col">Date</th>
                                        <th scope="col text-center" style={{ textAlign: "center" }}>Notes</th>
                                        <th scope="col">Filenames</th>
                                        <th scope="col">Date</th>
                                        <th scope="col text-break">No of Files</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Notebank.map((item) => {
                                        return (
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" /></td>
                                                <td>{item.Note.date}</td>
                                                <td>{item.Note.description}</td>
                                                <td className="text-break">
                                                    {item.Pdf.map((items) => {

                                                        return (
                                                            <>
                                                                <h6>{items.filename}</h6>
                                                            </>
                                                        )
                                                    })}
                                                </td>
                                                <td>
                                                    {item.Pdf.map((items) => {

                                                        return (
                                                            <>
                                                                <h6>{items.date}</h6>
                                                            </>
                                                        )
                                                    })}
                                                </td>
                                                <td className="text-center">{item.Pdf.length}</td>
                                            </tr>

                                        );
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                ) : ''}
            </div>
            
        </>
    )
}

export default Userdetail
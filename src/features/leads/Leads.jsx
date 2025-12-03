import React from "react";
import {
    useDeleteLeadMutation,
    useGetAllLeadsQuery,
    useLazyGetAllLeadsQuery
} from "../../services/leadsApi";
import { Link } from "react-router-dom";

function Leads() {
    const { isLoading, data } = useGetAllLeadsQuery();
    const [deleteLeadFn] = useDeleteLeadMutation();
    const [getAllLeadsFn] = useLazyGetAllLeadsQuery();

    function deleteLead(id) {
        deleteLeadFn(id)
            .then(() => {
                getAllLeadsFn();
                alert("Successfully Deleted");
            })
            .catch((err) => {
                alert("Something went wrong: " + JSON.stringify(err));
            });
    }

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold ">Leads</h2>
                <Link to="/addLead" className="btn btn-success">
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Lead
                </Link>
            </div>

            {isLoading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary"></div>
                    <p className="mt-2">Loading Leads...</p>
                </div>
            )}

            {!isLoading && (
                <div className="table-responsive shadow-sm rounded">
                    <table className="table table-hover table-bordered align-middle mb-0">
                        <thead className="table-primary text-center">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Course</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.map((lead) => (
                                <tr key={lead._id}>
                                    <td className="fw-semibold">{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.phone}</td>
                                    <td>{lead.courseInterested}</td>
                                    <td className="text-center">
                                        <span className="badge bg-info text-dark px-2 py-1">
                                            {lead.status}
                                        </span>
                                        <Link
                                            to={`/addRemarks/${lead._id}`}
                                            className="btn btn-warning btn-sm ms-2 mt-1"
                                        >
                                            Remarks
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <Link
                                            to={`/editLead/${lead._id}`}
                                            className="btn btn-primary btn-sm me-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteLead(lead._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Leads;

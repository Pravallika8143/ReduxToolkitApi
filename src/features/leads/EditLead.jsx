import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    useGetLeadDetailsByIdQuery,
    useLazyGetAllLeadsQuery,
    useLazyGetLeadDetailsByIdQuery,
    useUpdateLeadMutation
} from "../../services/leadsApi";
import { useFormik } from "formik";

function EditLead() {
    const { id } = useParams();
    const { isLoading, data } = useGetLeadDetailsByIdQuery(id);
    const [updateLeadFn] = useUpdateLeadMutation();
    const [getAllLeadsFn] = useLazyGetAllLeadsQuery();
    const [getLeadDetailsFn] = useLazyGetLeadDetailsByIdQuery(id);

    const leadForm = useFormik({
        initialValues: {
            _id: "",
            name: "",
            email: "",
            phone: "",
            courseInterested: "",
            status: "New"
        },
        onSubmit: (values) => {
            updateLeadFn(values).then(() => {
                alert("Lead Updated");
                getAllLeadsFn();
                getLeadDetailsFn();
            });
        },
    });

    useEffect(() => {
        if (data) {
            leadForm.setValues({ ...data });
        }
    }, [data]);

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "32rem" }}>
                <h3 className="text-center fw-bold mb-4">Edit Lead</h3>

                {isLoading && (
                    <div className="text-center my-3">
                        <div className="spinner-border text-primary"></div>
                        <p className="mt-2">Loading Lead Details...</p>
                    </div>
                )}

                {!isLoading && data && (
                    <form onSubmit={leadForm.handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                {...leadForm.getFieldProps("name")}
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                {...leadForm.getFieldProps("email")}
                                placeholder="Enter Email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                {...leadForm.getFieldProps("phone")}
                                placeholder="Enter Phone Number"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Course Interested</label>
                            <input
                                type="text"
                                className="form-control"
                                {...leadForm.getFieldProps("courseInterested")}
                                placeholder="Enter Course"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Status</label>
                            <select
                                className="form-select"
                                {...leadForm.getFieldProps("status")}
                            >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-success w-100 mt-2">
                            Update Lead
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default EditLead;

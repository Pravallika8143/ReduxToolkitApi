import { useFormik } from "formik";
import React from "react";
import { useAddNewLeadMutation } from "../../services/leadsApi";

function AddLeads() {
    const [addLeadFn] = useAddNewLeadMutation();

    const leadForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            courseInterested: "",
            status: "New"
        },
        onSubmit: (values) => {
            addLeadFn(values)
                .then((res) => console.log(res))
                .catch(err => console.log(err));
        }
    });

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card shadow-lg p-4" style={{ width: "32rem" }}>
                
                <h3 className="text-center fw-bold mb-3">
                    Add New Lead
                </h3>

                <form onSubmit={leadForm.handleSubmit} className="mt-3">

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            {...leadForm.getFieldProps("name")}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            {...leadForm.getFieldProps("email")}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone number"
                            {...leadForm.getFieldProps("phone")}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Course Interested</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter course"
                            {...leadForm.getFieldProps("courseInterested")}
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 mt-2">
                        Add Lead
                    </button>
                </form>

            </div>
        </div>
    );
}

export default AddLeads;

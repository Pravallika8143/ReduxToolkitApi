import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
    useGetLeadDetailsByIdQuery, 
    useLazyGetAllLeadsQuery, 
    // useLazyGetLeadDetailsByIdQuery, 
    useUpdateLeadMutation
} from "../../services/leadsApi";
import { useFormik } from "formik";

function AddRemarks() {
    const { id } = useParams();
    const { data, isLoading } = useGetLeadDetailsByIdQuery(id);
    const [updateLeadFn] = useUpdateLeadMutation();
    const [getAllLeadsFn] = useLazyGetAllLeadsQuery();

    const leadForm = useFormik({
        initialValues: {
            status: "New",
            remarks: ""
        },
        enableReinitialize: true, 
        onSubmit: (values) => {
            updateLeadFn({ ...data, ...values }).then(() => {
                alert("Lead Updated");
                getAllLeadsFn();
            });
        }
    });

    useEffect(() => {
        if (data) {
            leadForm.setValues({
                status: data.status || "New",
                remarks: data.remarks || ""
            });
        }
    }, [data]);

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "32rem" }}>
                <h3 className="text-center fw-bold mb-4">Add Remarks</h3>

                {isLoading && (
                    <div className="text-center my-3">
                        <div className="spinner-border text-primary"></div>
                        <p className="mt-2">Loading Lead Details...</p>
                    </div>
                )}

                {!isLoading && data && (
                    <form onSubmit={leadForm.handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Status</label>
                            <select
                                className="form-select"
                                {...leadForm.getFieldProps("status")}
                            >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Enrolled">Enrolled</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Remarks</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                {...leadForm.getFieldProps("remarks")}
                                placeholder="Add your remarks here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-success w-100 mt-2">
                            Add Remark
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default AddRemarks;

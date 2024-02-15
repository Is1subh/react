import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Dashboard(props) {
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		document.title = 'Dashboard';
	}, []);

	const resetAlert = () => {
		setSuccess("");
	};

	const formik = useFormik({
		initialValues: {
			path: '',
			value: '',
			status: ''
		},
		validationSchema: Yup.object({
			path: Yup.string().required('Path is required.'),
			value: Yup.string().required('Value is required.'),
			status: Yup.string().required('Status is required.')
		}),
		onSubmit: async (values) => {
			setLoading(true);
			if (values.status === 'others') {
                values.status = values.customStatus;
            }
			delete values.customStatus;
			setTimeout(async () => {
				try {
					await axios.post('http://localhost:3000/api/users', values);
					setSuccess(true);
					formik.resetForm();
				} catch (error) {
					console.error('Error submitting form:', error);
					setSuccess(false);
				} finally {
					setLoading(false);
				}
			}, 300);
		},
	});

	return (
		<div>
			<Navbar />
			{success === true && (
				<div className="alert alert-success alert-dismissible fade show" role="alert">
					<div className="container alert-margin">
						<strong>Success!</strong> Payload sent successfully.
						<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={resetAlert}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			)}
			{success === false && (
				<div className="alert alert-danger alert-dismissible fade show " role="alert">
					<div className="container alert-margin">
						<strong>Error!</strong> You should check in on some of those fields below.
						<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={resetAlert}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			)}

			<div className="centered-box container">
				<div className="box-shadow">
					<form onSubmit={formik.handleSubmit}>
						<div className="mb-3">
							<label htmlFor="path" className="form-label">Path:</label>
							<input
								type="text"
								className="form-control"
								id="path"
								name="path"
								value={formik.values.path}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.path && formik.errors.path && <div className="text-danger">{formik.errors.path}</div>}
						</div>
						<div className="mb-3">
							<label htmlFor="value" className="form-label">Value:</label>
							<input
								type="text"
								className="form-control"
								id="value"
								name="value"
								value={formik.values.value}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.value && formik.errors.value && <div className="text-danger">{formik.errors.value}</div>}
						</div>
						<div className="mb-3">
							<label htmlFor="status" className="form-label">Status:</label>
							<div className="input-group">
								<select
									className="form-control"
									id="status"
									name="status"
									value={formik.values.status}
									onChange={e => {
										formik.setFieldValue('status', e.target.value);
									}}
									onBlur={formik.handleBlur}
								>
									<option value="">Select Status</option>
									<option value="200">200 - OK</option>
									<option value="201">201 - Created</option>
									<option value="202">202 - Accepted</option>
									<option value="204">204 - No Content</option>
									<option value="301">301 - Moved Permanently</option>
									<option value="302">302 - Found (Moved Temporarily)</option>
									<option value="304">304 - Not Modified</option>
									<option value="400">400 - Bad Request</option>
									<option value="401">401 - Unauthorized</option>
									<option value="403">403 - Forbidden</option>
									<option value="404">404 - Not Found</option>
									<option value="405">405 - Method Not Allowed</option>
									<option value="500">500 - Internal Server Error</option>
									<option value="502">502 - Bad Gateway</option>
									<option value="503">503 - Service Unavailable</option>
									<option value="others"> Others </option>
								</select>
							</div>
							{formik.touched.status && formik.errors.status && <div className="text-danger">{formik.errors.status}</div>}
						</div>
						{formik.values.status === 'others' && (
							<div className="mb-3">
								<label htmlFor="customStatus" className="form-label">Custom Status:</label>
								<input
									type="number"
									className="form-control"
									id="customStatus"
									name="customStatus"
									value={formik.values.customStatus}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									required
									placeholder="Status should be a number"
								/>
								{formik.touched.customStatus && formik.errors.customStatus && <div className="text-danger">{formik.errors.customStatus}</div>}
							</div>
						)}
						<div className="float-right">
							<button type="submit" className="btn btn-primary" id="buttonId" disabled={loading || formik.isSubmitting}>
								{loading ? (
									<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span>&nbsp;Sending...</span></>
								) : (
									<>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
											<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
										</svg>
										&nbsp;Send
									</>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

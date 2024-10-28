import React, { useState } from "react";
import { Button } from "./Button";

export const EducationalInfo = () => {
	const [educationalInfo, setEducationalInfo] = useState({
		school: "",
		degree: "",
		startDate: "",
		endDate: "",
	});

	const [displayEduInfo, setDisplayEduInfo] = useState({
		school: "islamia",
		degree: "BS",
		startDate: "01/11/2021",
		endDate: "01/11/2025",
	});

	const [isSave, setIsSave] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEducationalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleSave = () => {
		setDisplayEduInfo(educationalInfo);
		setEducationalInfo({
			school: "",
			degree: "",
			startDate: "",
			endDate: "",
		});
		setIsSave(false);
	};

	const handleEdit = () => {
		setEducationalInfo(displayEduInfo);
		setIsSave(true);
	};

	return (
		<section
			id="education-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4"
		>
			<div className="flex flex-col justify-center align-middle md:mx-auto space-y-2 md:col-span-1 border-r border-black px-2">
				<label>
					Institute Name :{" "}
					<input
						type="text"
						name="school"
						onChange={handleChange}
						value={educationalInfo.school}
						disabled={!isSave}
						placeholder="University/College/School"
						className="border border-red-400"
					/>
				</label>
				<label>
					Degree Name :{" "}
					<input
						type="text"
						name="degree"
						onChange={handleChange}
						value={educationalInfo.degree}
						disabled={!isSave}
						placeholder="PhD/MS/BS"
						className="border border-red-400"
					/>
				</label>
				<div>
					<label>
						Study Date : From{" "}
						<input
							type="date"
							name="startDate"
							onChange={handleChange}
							disabled={!isSave}
							value={educationalInfo.startDate}
							className="border border-red-400"
						/>{" "}
						To{" "}
						<input
							type="date"
							name="endDate"
							onChange={handleChange}
							value={educationalInfo.endDate}
							disabled={!isSave}
							className="border border-red-400"
						/>
					</label>
				</div>
			</div>
			<div className="md:col-span-3 md:text-center">
				<p>{displayEduInfo.school}</p>
				<p>{displayEduInfo.degree}</p>
				<div className="flex flex-col md:flex-row space-x-2 justify-center">
					<div className="flex space-x-1">
						<span>Start Date </span>
						<time dateTime={displayEduInfo.startDate}>
							{displayEduInfo.startDate}
						</time>
					</div>
					<div className="flex space-x-1">
						<span> End Date </span>
						<time dateTime={displayEduInfo.endDate}>
							{displayEduInfo.endDate}
						</time>
					</div>
				</div>
				<div>
					{isSave ? (
						<Button
							classes=" border-pink-600 "
							onClick={handleSave}
							text="Save"
						/>
					) : (
						<Button
							classes=" border-green-600 "
							onClick={handleEdit}
							text="Edit"
						/>
					)}
				</div>
			</div>
		</section>
	);
};

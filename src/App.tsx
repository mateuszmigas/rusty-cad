import { useEffect, useState, useId } from "react";
import "@google/model-viewer";
import { loadOcct } from "./occt";
import { visualizeShapes } from "./visualise";

export const App = () => {
	const [modelUrl, setModelUrl] = useState<string>("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			const oc = await loadOcct();
			const sphereSize = 0.65;
			const box = new oc.BRepPrimAPI_MakeBox_2(1, 1, 1);
			const sphere = new oc.BRepPrimAPI_MakeSphere_5(
				new oc.gp_Pnt_3(0.5, 0.5, 0.5),
				sphereSize,
			);
			const cut = new oc.BRepAlgoAPI_Cut_3(
				box.Shape(),
				sphere.Shape(),
				new oc.Message_ProgressRange_1(),
			);
			cut.Build(new oc.Message_ProgressRange_1());
			const url = visualizeShapes(oc, cut.Shape());
			console.log(url);
			setModelUrl(url);
			setIsLoading(false);
		};
		init();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg shadow-lg p-6">
					{isLoading ? (
						<div className="flex items-center justify-center h-96">
							<div className="text-center">
								<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
								<p className="text-gray-600">Loading OpenCascade.js...</p>
							</div>
						</div>
					) : modelUrl ? (
						// @ts-ignore
						<model-viewer
							src={modelUrl}
							camera-controls
							enable-pan
							style={{ width: "100%", height: "500px" }}
							auto-rotate
							shadow-intensity="1"
						/>
					) : (
						<div className="flex items-center justify-center h-96">
							<p className="text-red-600">Failed to load 3D model</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

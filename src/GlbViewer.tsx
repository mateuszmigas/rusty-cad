import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	useGLTF,
	Environment,
	ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
	url: string;
}

const Model = (props: ModelProps) => {
	const { url } = props;
	const { scene } = useGLTF(url);
	return <primitive object={scene} />;
};

interface GlbViewerProps {
	modelUrl: string;
	className?: string;
}

export const GlbViewer = (props: GlbViewerProps) => {
	const { modelUrl, className = "" } = props;

	return (
		<div className={`w-full h-96 ${className}`}>
			<Canvas
				camera={{ position: [3, 3, 3], fov: 50 }}
				shadows
				gl={{ preserveDrawingBuffer: true }}
			>
				<ambientLight intensity={0.4} />
				<directionalLight
					position={[10, 10, 5]}
					intensity={1}
					castShadow
					shadow-mapSize-width={2048}
					shadow-mapSize-height={2048}
				/>

				<Suspense fallback={null}>
					<Model url={modelUrl} />
					<ContactShadows
						opacity={0.4}
						scale={10}
						blur={1}
						far={10}
						resolution={256}
						color="#000000"
					/>
					<Environment preset="city" />
				</Suspense>

				<OrbitControls
					enablePan={true}
					enableZoom={true}
					enableRotate={true}
					autoRotate={true}
					autoRotateSpeed={2}
				/>
			</Canvas>
		</div>
	);
};

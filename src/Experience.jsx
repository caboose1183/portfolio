import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

import { useThree, useFrame } from "@react-three/fiber";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const zoom = () => {
    useThree(({ camera }) => {
      camera.position.set(1, 1, 1);
    });
  };

  return (
    <>
      <Environment preset="city" />

      <color args={["#241a1a"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.2, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* screen light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#6a18ee"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* computer model */}
          <primitive object={computer.scene} position-y={-1.2}>
            {/* holds iframe to generate site on seperate screenm mimicing laptop screen */}
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://caboose1183first.netlify.app/"></iframe>
            </Html>
          </primitive>

          {/* name */}
          <Text
            font="./bubblegum-sans-v16-latin-regular.woff"
            fontSize={0.4}
            position={[1, 1, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Sidney Pang
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

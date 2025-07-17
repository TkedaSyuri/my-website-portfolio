import { useGLTF } from '@react-three/drei'

const GeoTree = () => {
  const treeModel = useGLTF('/gltf/tree/grass.gltf')
  const count = 4; // 木の本数
  const radius = 25; // 円の半径

  return (
    <>
      {[...Array(count)].map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            rotation={[0, 1, 0]} // 木を円の中心に向ける
            scale={6}
          >
            <primitive object={treeModel.scene.clone()} />
          </mesh>
        );
      })}
    </>
  );
};

export default GeoTree;

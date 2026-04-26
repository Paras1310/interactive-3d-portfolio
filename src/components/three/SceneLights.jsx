function SceneLights() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <pointLight position={[-3, -2, 2]} intensity={1.5} />
    </>
  );
}

export default SceneLights;
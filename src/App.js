import { ModelViewer3D, ModelViewerAR, ModelViewer } from "./components";

const TEST_SLUG = "test-model-for-component-docs-3";
const TEST_SLUG_2 = "padelracket-2";

function App() {
  return (
    <div>
      <ModelViewer slug={TEST_SLUG} autoRotate={true}>
        <img
          src="https://pbs.twimg.com/profile_images/1343584679664873479/Xos3xQfk_400x400.jpg"
          alt="poster"
          slot="poster"
        />
      </ModelViewer>
      <ModelViewer3D slug={TEST_SLUG_2} />
      <ModelViewerAR slug={TEST_SLUG_2}>
        <button slot="ar-button" className="ar-placement-button">
          See In AR
        </button>
      </ModelViewerAR>
    </div>
  );
}

export default App;

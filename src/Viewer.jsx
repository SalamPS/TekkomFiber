// import './css/App.css'
import Box from "./canvas/Box";

function Viewer() {
  let url = 'asus_strix_b_550_f_gaming_motherboard_realistic';
  let view = <></>
  switch (url) {
    case 'asus_rog_geforce_rtx_VGA_CARD' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'asus_pc_gaming_monitor' : 
      view = <Box cam={[30,20,0]} scale={15} speed={undefined} src={url} light={undefined} pos={-5}/>
    break;
    case 'asus_strix_b_550_f_gaming_motherboard_realistic' : 
      view = <Box cam={[320,420,80]} scale={12} speed={0.00001} src={url} light={undefined} pos={30}/>
    break;
    case 'crucial_ballistix_8gb_ddr4_3600_ram__black' : 
      view = <Box cam={[20,20,20]} scale={200} speed={undefined} src={url} light={15} pos={undefined}/>
    break;
    case 'dream_computer_CPU' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'gaming_mouse' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'mechanical_rgb_keyboard' : 
      view = <Box cam={[20,20,20]} scale={1} speed={0.0005} src={url} light={undefined} pos={undefined}/>
    break;
    case 'pc_cooler_2' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'speaker_vipe_nitro_x7' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'ssd_samsung_980_pro_1tb' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
    case 'desktop_pc' : 
      view = <Box cam={[20,20,20]} scale={1} speed={undefined} src={url} light={undefined} pos={undefined}/>
    break;
  }

  return (
    <div id="Viewer">
      <div className='box3d'>
        <h1 className="title">
          Tekkom3D
        </h1>
        {view}
        <div className="explainer">
          <h1>Here</h1>
        </div>
      </div>
    </div>
  )
}

export default Viewer

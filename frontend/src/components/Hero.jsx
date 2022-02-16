import illustration from "../assets/illustraion.svg";
import Grid from "@mui/material/Grid";


function Hero() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="header">
          <h1>Greeting</h1>
          <h4>Lorem ipsum dolor, sit amet</h4>
        </div>
      </Grid>
      <Grid item xs={12}>
        <img src={illustration} className="img"></img>
      </Grid>

    </Grid>

    // <div className="hero">
    //   <div className="header">
    //     <h1>Greeting</h1>
    //     <h4>Lorem ipsum dolor, sit amet</h4>
    //   </div>

    //   
    // </div>
  );
}

export default Hero;

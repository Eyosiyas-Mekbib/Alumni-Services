import { TextField, Grid, Item } from "@mui/material";

function FormStep(props) {
  const step = props.step;

  function AlumniCredentials() {
    return (
      <div>
        <h1>Confirm your creditials</h1>
            <TextField id="outlined-basic" color="success" label="Firstname" variant="outlined"/>
      </div>
    );
  }

  function Address() {
    return (
      <div>
        <h1>Send To</h1>
      </div>
    );
  }

  function RequestPayment() {
    return (
      <div>
        <h1>Pay for the Request</h1>
      </div>
    );
  }

  // function CurrentStep() {
  //     if(step == 1){
  //         return <AlumniCred/>
  //     }else if(step == 2){
  //         return <Address/>
  //     }else if(step == 3){
  //         return <ReqPayment/>
  //     }

  //     console.log(step)
  // }

  return (
    <div>
      {step == 0 && <AlumniCredentials />}
      {step == 1 && <Address />}
      {step == 2 && <RequestPayment />}
    </div>
  );
}

export default FormStep;

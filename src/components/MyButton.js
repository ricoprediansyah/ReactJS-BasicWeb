const MyButton = (props) => {
return(
  <div>
    <button onClick={() => props.click()}>
      Click disini bro!
    </button>
  </div>
)

}
export default MyButton;
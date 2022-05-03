import "./ForText.style.scss";

export type FortextProps = {
  Texto: any;
};

export function Fortext(props: FortextProps) {
return(
    <div className="container-ForText">
      <h1> {props.Texto} </h1>
    </div>
  );
}

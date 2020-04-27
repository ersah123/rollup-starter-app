import format from "date-fns/format";

var span = <HTMLSpanElement>document.querySelector("#time-now");

export default function update(): void {
	span.textContent = format(new Date(), "h:mm:ssa");
	setTimeout(update, 1000);
}

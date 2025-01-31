import { Chart, registerables } from "chart.js";
import { createCanvas } from "@gfx/canvas";

Chart.register(...registerables);
Chart.register({
	id: "BackgroundColor",
	beforeDraw(chart) {
		const { ctx } = chart;
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
		ctx.restore();
	},
});
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext("2d");
new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

canvas.save("./test.png");

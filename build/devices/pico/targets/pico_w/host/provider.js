import Digital from "embedded:io/digital";
import DigitalBank from "embedded:io/digitalbank";

const device = {
	io: {Digital, DigitalBank},
	pin: {
		button: 15,
		led: 32
	}
};

export default device;


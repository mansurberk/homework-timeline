// import { GiChemicalDrop as Kimya } from "react-icons/gi";
// import { BiAtom as Fizik } from "react-icons/bi";
// import { RiVirusLine as Biyo } from "react-icons/ri";
// import { TbMath as Mat } from "react-icons/tb";
import { BsBook as Edebiyat } from "react-icons/bs";
// import { FaPray as Din } from "react-icons/fa";
// import { MdHistoryEdu as Tarih } from "react-icons/md";
// import { RiEnglishInput as Ingilizce } from "react-icons/ri";
// import { RiFontSize as Almanca } from "react-icons/ri";
// import { GiThink as Felsefe } from "react-icons/gi";
import "./App.css";
import data from "./local.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  return (
    <VerticalTimeline>
      {data &&
        data.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Edebiyat/>}
            date={item.bitis}
          >
            <h3 className="vertical-timeline-element-title">{item.ders}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.konu}</h4>
            <p>{item.odev}</p>
          </VerticalTimelineElement>
        ))}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<logo />}
      />
    </VerticalTimeline>
  );
}

export default App;

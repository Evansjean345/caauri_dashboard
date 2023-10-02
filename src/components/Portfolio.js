import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Textarea,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Portfolio() {
  //data
  const [subtitle, setSubtitle] = useState("");
  const [p, setP] = useState("");
  const [featureOne, setFeatureOne] = useState("");
  const [featureTwo, setFeatureTwo] = useState("");
  const [featureThree, setFeatureThree] = useState("");
  const [featureFour, setFeatureFour] = useState("");
  const [featureFive, setFeatureFive] = useState("");
  const [featureSix, setFeatureSix] = useState("");
  const [featureSeven, setFeatureSeven] = useState("");
  const [descriptionOne, setDescriptionOne] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  //page recursive
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [problematicOne, setProblematicOne] = useState("");
  const [problematicTwo, setProblematicTwo] = useState("");
  const [strategyOne, setStrategyOne] = useState("");
  const [strategyTwo, setStrategyTwo] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientJob, setClientJob] = useState("");
  const [clientContent, setClientContent] = useState("");

  //upload d'image
  const [picture, setPicture] = useState([]);
  const [render, setRender] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleFileChange = (e) => {
    setPicture(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("p", p);
    formData.append("subtitle", subtitle);
    formData.append("featureOne", featureOne);
    formData.append("featureTwo", featureTwo);
    formData.append("featureThree", featureThree);
    formData.append("featureFour", featureFour);
    formData.append("featureFive", featureFive);
    formData.append("featureSix", featureSix);
    formData.append("featureSeven", featureSeven);
    formData.append("descriptionOne", descriptionOne);
    formData.append("descriptionTwo", descriptionTwo);
    formData.append("descriptionThree", descriptionThree);
    formData.append("title", title);
    ///
    formData.append("problematicOne", problematicOne);
    formData.append("problematicTwo", problematicOne);
    formData.append("strategyOne", strategyOne);
    formData.append("strategyTwo", strategyTwo);
    // Ajouter les champs d'objet imbriqué 'client'
    formData.append("clientName", clientName);
    formData.append("clientJob", clientJob);
    formData.append("clientContent", clientContent);
    for (let i = 0; i < picture.length; i++) {
      formData.append(`picture`, picture[i]);
    }

    axios
      .post("https://caauri-api.cyclic.cloud/portfolio", formData)
      .then((res) => {
        console.log("response", res);
        handleOpen();
      })
      .catch((err) => console.log("error", err));
    console.log(formData);
  };

  //mise a jour des données
  const [allData, setAllData] = useState([
    {
      subtitle: "",
      p: "",
      picture: "",
      featureOne: "",
      featureTwo: "",
      featureThree: "",
      featureFour: "",
      featureFive: "",
      featureSix: "",
      featureSeven: "",
      //recursive page
      title: "",
      type: "",
      problematicOne: "",
      problematicTwo: "",
      strategyOne: "",
      strategyTwo: "",
      clientName: "",
      clientJob: "",
      clientContent: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://caauri-api.cyclic.cloud/portfolio")
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (index, field, value) => {
    const newData = [...allData];
    const updatedData = { ...newData[index] };

    // Divisez la propriété field en une série de clés
    const keys = field.split(".");

    // Mettez à jour l'objet imbriqué avec la nouvelle valeur
    let currentLevel = updatedData;
    for (let i = 0; i < keys.length - 1; i++) {
      currentLevel = currentLevel[keys[i]];
    }
    currentLevel[keys[keys.length - 1]] = value;

    // Mettez à jour l'état avec la nouvelle copie profonde
    newData[index] = updatedData;
    setAllData(newData);
  };

  return (
    <div className="flex flex-no-wrap">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 absolute sm:relative bg-black shadow h-[1000vh] flex-col justify-between hidden sm:flex">
        <div className="px-8 py-8">
          <div className="h-16 w-full flex items-center">
            <img src="/images/logo_white.png" alt="" />
          </div>
          <ul className="mt-20">
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm  ml-2">Acceuil</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/caaurimuniquez">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Caaurimuniquez</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/service">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-compass"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="text-sm  ml-2">Service</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/portfolio">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-code"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="7 8 3 12 7 16" />
                    <polyline points="17 8 21 12 17 16" />
                    <line x1={14} y1={4} x2={10} y2={20} />
                  </svg>
                  <span className="text-sm  ml-2">Portfolio</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/blog">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Blog</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-8">
              <Link to="/carriere">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm  ml-2">Carriere</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
              <Link to="/contact">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span className="text-sm  ml-2">Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Nav Mobile */}
      <div
        className="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div
          className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onclick="sidebarHandler()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={6} cy={10} r={2} />
            <line x1={6} y1={4} x2={6} y2={8} />
            <line x1={6} y1={12} x2={6} y2={20} />
            <circle cx={12} cy={16} r={2} />
            <line x1={12} y1={4} x2={12} y2={14} />
            <line x1={12} y1={18} x2={12} y2={20} />
            <circle cx={18} cy={7} r={2} />
            <line x1={18} y1={4} x2={18} y2={5} />
            <line x1={18} y1={9} x2={18} y2={20} />
          </svg>
        </div>
        <div className="px-8">
          <div className="h-16 w-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={144}
              height={30}
              viewBox="0 0 144 30"
            >
              <path
                fill="#5F7DF2"
                d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
              />
            </svg>
          </div>
          <ul className="mt-12">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">Dashboard</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                5
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-puzzle"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>
                <span className="text-sm  ml-2">Products</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                8
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                  <circle cx={12} cy={12} r={9} />
                </svg>
                <span className="text-sm  ml-2">Performance</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-code"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
                <span className="text-sm  ml-2">Deliverables</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-puzzle"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>
                <span className="text-sm  ml-2">Invoices</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                25
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-stack"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span className="text-sm  ml-2">Inventory</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Settings</span>
              </div>
            </li>
          </ul>
          <div className="flex justify-center  mt-48 mb-4 w-full">
            <div className="relative ">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className=" bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="px-8 border-t border-gray-700">
          <ul className="w-full flex items-center justify-between bg-gray-800">
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-archive"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        {/* create a new portfolio */}
        <div className="w-full flex flex-wrap relative  mb-12 p-8 rounded shadow-xl">
          <div className="absolute top-0 left-20 text-xl font-bold">
            AJOUTER UNE NOUVELLE SECTION
          </div>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-1/2 py-8 px-8">
                <strong>Nom du projet</strong>
                <Textarea
                  variant="standard"
                  label="titre"
                  value={subtitle}
                  name="subtitle"
                  onChange={(e) => {
                    setSubtitle(e.target.value);
                  }}
                />
              </div>
              <div className="w-1/2 py-8 px-8">
                <strong>contenu</strong>
                <Textarea
                  variant="standard"
                  label="contenu"
                  value={p}
                  name="p"
                  onChange={(e) => setP(e.target.value)}
                />
                <strong>image du projet</strong>
                <Input
                  label="photo du projet"
                  variant="outline"
                  size="lg"
                  type="file"
                  name="picture"
                  onChange={handleFileChange}
                  multiple
                  className="file:rounded-lg file:border-0 file:font-semibold file:bg-[#f9e2d3] file:mr-8 file:text-[#db6013]"
                />
              </div>
            </div>
            <div className="flex w-full relative">
              <strong className="absolute top-0 left-12">
                Services fournis
              </strong>
              <div className="w-1/2 flex flex-col space-y-2 px-8 py-8">
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureOne"
                  value={featureOne}
                  onChange={(e) => setFeatureOne(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureTwo"
                  value={featureTwo}
                  onChange={(e) => setFeatureTwo(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureOne"
                  value={featureThree}
                  onChange={(e) => setFeatureThree(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureFour"
                  value={featureFour}
                  onChange={(e) => setFeatureFour(e.target.value)}
                />
              </div>
              <div className="w-1/2 flex-col space-y-2 px-8 py-8">
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureFive"
                  value={featureFive}
                  onChange={(e) => setFeatureFive(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureSix"
                  value={featureSix}
                  onChange={(e) => setFeatureSix(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="featureSeven"
                  value={featureSeven}
                  onChange={(e) => setFeatureSeven(e.target.value)}
                />
              </div>
            </div>
            <div className=" w-full flex px-8">
              <div className="w-1/2">
                <strong className="">Description du projet en 3 etapes</strong>
                <Input
                  variant="standard"
                  label="contenu"
                  name="descriptionOne"
                  value={descriptionOne}
                  onChange={(e) => setDescriptionOne(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="descriptionTwo"
                  value={descriptionTwo}
                  onChange={(e) => setDescriptionTwo(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="contenu"
                  name="descriptionThree"
                  value={descriptionThree}
                  onChange={(e) => setDescriptionThree(e.target.value)}
                />
              </div>
              <div className="w-1/2 px-8">
                <strong className="">Titre</strong>
                <Textarea
                  variant="standard"
                  label="Titre de la page d'acceuil"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <strong className="">Type d'industrue</strong>
                <Input
                  variant="standard"
                  label="contenu"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>
            <div className=" w-full flex px-8 mt-8">
              <div className="w-1/2">
                <strong className="">Problematic</strong>
                <Textarea
                  variant="standard"
                  label="paragraphe 1"
                  name="problematicOne"
                  value={problematicOne}
                  onChange={(e) => setProblematicOne(e.target.value)}
                />
                <Textarea
                  variant="standard"
                  label="paragraphe 2"
                  name="problematicTwo"
                  value={problematicTwo}
                  onChange={(e) => setProblematicTwo(e.target.value)}
                />
              </div>
              <div className="w-1/2 px-8">
                <strong className="">Strategy</strong>
                <Textarea
                  variant="standard"
                  label="paragraphe 1"
                  name="strategyOne"
                  value={strategyOne}
                  onChange={(e) => setStrategyOne(e.target.value)}
                />
                <Textarea
                  variant="standard"
                  label="paragraphe 2"
                  name="strategyTwo"
                  value={strategyTwo}
                  onChange={(e) => setStrategyTwo(e.target.value)}
                />
              </div>
            </div>
            <div className=" py-8 px-8">
              <strong>Retour du client</strong>
              <div className="flex space-x-8">
                <Input
                  variant="standard"
                  label="nom du client"
                  value={clientName}
                  name="clientName"
                  onChange={(e) => setClientName(e.target.value)}
                />
                <Input
                  variant="standard"
                  label="poste du client"
                  value={clientJob}
                  name="clientJob"
                  onChange={(e) => setClientJob(e.target.value)}
                />
              </div>
              <div className="py-8 w-1/2">
                <Textarea
                  variant="standard"
                  label="retour du client"
                  value={clientContent}
                  name="clientContent"
                  onChange={(e) => setClientContent(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full py-8 flex items-center justify-center">
              <button
                type="submit"
                className="bg-black p-2 text-white rounded-xl cursor-pointer hover:bg-gray-900 transition-all"
              >
                envoyez
              </button>
            </div>
          </form>
        </div>
        {/* Modify Portfolio */}
        <div className="w-full flex flex-wrap  mb-12 p-8 rounded shadow-xl">
          {allData.map((data, index) => (
            <div
              key={data._id}
              className="w-full rounded-xl shadow-2xl p-4 m-8"
            >
              <form
                className="flex justify-center space-y-1 flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  const updatedData = allData[index];
                  axios
                    .put(
                      `https://caauri-api.cyclic.cloud/portfolio/${data._id}`,
                      updatedData
                    )
                    .then((res) => console.log("response", res))
                    .catch((err) => console.log("error", err));

                  handleOpen();
                }}
              >
                <div className="flex space-x-2">
                  <Textarea
                    variant="standard"
                    label="titre"
                    value={data.subtitle}
                    className="border-r border-black"
                    onChange={(e) =>
                      handleChange(index, "subtitle", e.target.value)
                    }
                  />
                  <Textarea
                    variant="standard"
                    label="contenu"
                    value={data.p}
                    className="border-r border-black"
                    onChange={(e) => handleChange(index, "p", e.target.value)}
                  />
                </div>
                <strong className="">Services fournis</strong>
                <div className="flex w-full">
                  <div className="pr-8 flex flex-col space-y-1 w-1/2">
                    {" "}
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureOne}
                      onChange={(e) =>
                        handleChange(index, "featureOne", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureTwo}
                      onChange={(e) =>
                        handleChange(index, "featureTwo", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureThree}
                      onChange={(e) =>
                        handleChange(index, "featureThree", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureFour}
                      onChange={(e) =>
                        handleChange(index, "featureFour", e.target.value)
                      }
                    />
                  </div>
                  <div className="px-8 flex flex-col space-y-1 w-1/2">
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureFive}
                      onChange={(e) =>
                        handleChange(index, "featureFive", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureSix}
                      onChange={(e) =>
                        handleChange(index, "featureSix", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="caratéristiques"
                      value={data.featureSeven}
                      onChange={(e) =>
                        handleChange(index, "featureSeven", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex py-2 w-full">
                  <div className="w-1/2 pr-8">
                    <strong className="">Description</strong>
                    <Input
                      variant="standard"
                      label="contenu"
                      name="descriptionOne"
                      value={data.descriptionOne}
                      onChange={(e) =>
                        handleChange(index, "descriptionOne", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="contenu"
                      name="descriptionTwo"
                      value={data.descriptionTwo}
                      onChange={(e) =>
                        handleChange(index, "descriptionTwo", e.target.value)
                      }
                    />
                    <Input
                      variant="standard"
                      label="contenu"
                      name="descriptionThree"
                      value={data.descriptionThree}
                      onChange={(e) =>
                        handleChange(index, "descriptionThree", e.target.value)
                      }
                    />
                  </div>
                  <div className="w-1/2 pr-8">
                    <strong className="">Titre</strong>
                    <Textarea
                      variant="standard"
                      label="Titre de la page d'acceuil"
                      name="title"
                      value={data.title}
                      onChange={(e) =>
                        handleChange(index, "title", e.target.value)
                      }
                    />
                    <strong className="">Type d'industrue</strong>
                    <Input
                      variant="standard"
                      label="contenu"
                      name="type"
                      value={data.type}
                      onChange={(e) =>
                        handleChange(index, "type", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className=" w-full flex pr-8 py-1 mt-8">
                  <div className="w-1/2">
                    <strong className="">Problematic</strong>
                    <Textarea
                      variant="standard"
                      label="paragraphe 1"
                      name="problematicOne"
                      value={data.problematicOne}
                      onChange={(e) =>
                        handleChange(index, "problematicOne", e.target.value)
                      }
                    />
                    <Textarea
                      variant="standard"
                      label="paragraphe 2"
       
                      name="problematicTwo"
                      value={data.problematicTwo}
                      onChange={(e) =>
                        handleChange(index, "problematicTwo", e.target.value)
                      }
                    />
                  </div>
                  <div className="w-1/2 px-8">
                    <strong className="">Strategy</strong>
                    <Textarea
                      variant="standard"
                      label="paragraphe 1"
                      name="strategyOne"
                      value={data.strategyOne}
                      onChange={(e) =>
                        handleChange(index, "strategyOne", e.target.value)
                      }
                    />
                    <Textarea
                      variant="standard"
                      label="paragraphe 2"
                      name="strategyTwo"
                      value={data.strategyTwo}
                      onChange={(e) =>
                        handleChange(index, "strategyTwo", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className=" py-8 pr-8">
                  <strong>Retour du client</strong>
                  <div className="flex space-x-8">
                    <Input
                      variant="standard"
                      label="nom du client"
                      value={data.clientName}
                      name="clientName"
                      onChange={(e) =>
                        handleChange(index, "clientName", e.target.value)
                      }
                    />
                    <Textarea
                      variant="standard"
                      label="poste du client"
                      value={data.clientJob}
                      name="clientJob"
                      onChange={(e) =>
                        handleChange(index, "clientJob", e.target.value)
                      }
                    />
                  </div>
                  <div className="py-8 w-1/2">
                    <Textarea
                      variant="standard"
                      label="retour du client"
                      value={data.clientContent}
                      name="clientContent"
                      onChange={(e) =>
                        handleChange(index, "clientContent", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="w-full space-x-1 flex">
                  <img src={data.picture[0]} className="h-32 w-1/4" />
                  <img src={data.picture[1]} className="h-32 w-1/4 " />
                  <img src={data.picture[2]} className="h-32 w-1/4 " />
                  <img src={data.picture[3]} className="h-32 w-1/4 " />
                </div>
                <div className="flex-col">
                  <div className="w-full py-8 flex space-x-6 items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const updatedData = allData[index];
                        axios
                          .delete(
                            `http://localhost:4000/portfolio/${data._id}`,
                            updatedData
                          )
                          .then((res) => console.log("response", res))
                          .catch((err) => console.log("error", err));

                        handleOpen();
                      }}
                      className="bg-red-900 hover:bg-red-800 p-2 text-white rounded-xl cursor-pointer  transition-all"
                    >
                      supprimer
                    </button>
                    <button
                      type="submit"
                      className="bg-black p-2 text-white rounded-xl cursor-pointer hover:bg-gray-900 transition-all"
                    >
                      envoyez
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
        <div className="w-full h-[100vh] rounded border-dashed border-2 border-gray-300">
          <iframe
            src="https://caauri.netlify.app/portfolio"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>Opération réussie</DialogHeader>
        <DialogBody divider className="text-semibold">
          Les changements ont bien été enregistrés
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              window.location.reload();
            }}
          >
            <span>Fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Portfolio;

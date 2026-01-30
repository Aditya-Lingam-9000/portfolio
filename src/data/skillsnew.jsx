import {
    SiPython,
    SiCplusplus,
    SiTensorflow,
    SiPytorch,
    SiLangchain,
    SiOpenai,
    SiHuggingface,
    SiNumpy,
    SiPandas,
    SiPlotly,
    SiStreamlit,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiReact,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiTerraform,
    SiKubernetes,
    SiNvidia,
    SiFigma,
    SiDocker,
    SiAnaconda,
    SiGooglecolab,
    SiRaspberrypi
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Note: Some icons might not have direct matches in 'si' or might need manual adjustment.
// Using best approximations available in standard libraries.
// 'LlamaIndex' and 'Weights & Biases' might not be in standard sets yet, using placeholders or generic text if critical.
// For now, removing them to avoid breakage or using generic if user insists, but list matches image as close as possible.

export const skillsData = [
    {
        category: "Languages",
        items: [
            { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
            { node: <SiCplusplus className="text-[#00599C]" />, title: "C++" },
            { node: <FaJava className="text-[#007396]" />, title: "Java" },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { node: <SiTensorflow className="text-[#FF6F00]" />, title: "TensorFlow" },
            { node: <SiPytorch className="text-[#EE4C2C]" />, title: "PyTorch" },
            // Closest for LangChain currently available or use generic chain
            { node: <SiLangchain className="text-white" />, title: "LangChain" },
            // LlamaIndex not standardized in react-icons yet, skipped or use text fallback if critical
            { node: <span className="font-bold text-lg">🔗</span>, title: "LlamaIndex" }, // Placeholder
            { node: <SiOpenai className="text-white" />, title: "OpenAI" },
            { node: <SiHuggingface className="text-[#FFD21E]" />, title: "Hugging Face" },
        ]
    },
    {
        category: "Libraries",
        items: [
            { node: <SiNumpy className="text-[#013243]" />, title: "NumPy" },
            { node: <SiPandas className="text-[#150458]" />, title: "Pandas" },
            // Matplotlib often represented by Python or custom charts, skipping if no direct icon
            { node: <span className="font-bold text-sm">Matplotlib</span>, title: "Matplotlib" },
            { node: <SiPlotly className="text-[#3F4F75]" />, title: "Plotly" },
            { node: <SiStreamlit className="text-[#FF4B4B]" />, title: "Streamlit" },
            // Weights & Biases
            { node: <span className="font-bold text-[#FFBE00]">W&B</span>, title: "Weights & Biases" },
        ]
    },
    {
        category: "Web Dev",
        items: [
            { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5" },
            { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3" },
            { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
            { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
            { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL" },
            { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
            { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js" },
        ]
    },
    {
        category: "Tools",
        items: [
            { node: <SiGit className="text-[#F05032]" />, title: "Git" },
            { node: <SiGithub className="text-white" />, title: "GitHub" },
            { node: <SiTensorflow className="text-[#FF6F00]" />, title: "TensorFlow (Tools)" }, // Duplicate in image
            { node: <span className="text-yellow-400 font-mono">:::</span>, title: "Other Tool" }, // Placeholder for the dots icon
            { node: <SiKubernetes className="text-[#326CE5]" />, title: "Kubernetes" },
            { node: <SiNvidia className="text-[#76B900]" />, title: "NVIDIA" },
            { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma" },
            { node: <SiDocker className="text-[#2496ED]" />, title: "Docker" },
        ]
    },
    {
        category: "Environments",
        items: [
            { node: <SiAnaconda className="text-[#44A833]" />, title: "Anaconda" },
            { node: <SiGooglecolab className="text-[#F9AB00]" />, title: "Google Colab" },
            { node: <SiNvidia className="text-[#76B900]" />, title: "NVIDIA (Env)" },
            { node: <SiRaspberrypi className="text-[#C51A4A]" />, title: "Raspberry Pi" },
        ]
    }
];

import React from "react";
import styles from "./dripSVG.module.scss"

const DripvSVG = () => {
    return (
        <svg className={styles.dripSVG}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 660 263"
            width="100%"
        >
            <path fill="none" d="M0 0H660V263H0z"></path>
            <clipPath id="a">
                <path d="M0 0H660V263H0z"></path>
            </clipPath>
            <g clip-path="url(#a)">
                <path fill="none" d="M0 0H715V263H0z"></path>
                <path d="M0 144.5C0 159.678 12.322 172 27.5 172S55 159.678 55 144.5v-92C55 37.322 67.322 25 82.5 25S110 37.322 110 52.5v33c0 15.178 12.322 27.5 27.5 27.5S165 100.678 165 85.5v-56C165 14.322 177.322 2 192.5 2S220 14.322 220 29.5v76c0 15.178 12.322 27.5 27.5 27.5s27.5-12.322 27.5-27.5v-59c0-15.178 12.322-27.5 27.5-27.5S330 31.322 330 46.5v98c0 15.178 12.322 27.5 27.5 27.5s27.5-12.322 27.5-27.5v-94c0-15.178 12.322-27.5 27.5-27.5S440 35.322 440 50.5v38c0 15.178 12.322 27.5 27.5 27.5S495 103.678 495 88.5v-58C495 15.322 507.322 3 522.5 3S550 15.322 550 30.5v67c0 15.178 12.322 27.5 27.5 27.5S605 112.678 605 97.5v-70C605 12.322 617.322 0 632.5 0S660 12.322 660 27.5V263H0V144.5z"></path>
            </g>
        </svg>
    );
}

export default DripvSVG;
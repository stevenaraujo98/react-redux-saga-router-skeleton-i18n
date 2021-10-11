// import React, { useState, useEffect } from 'react';
// import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
// import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
// import Brightness2Icon from '@material-ui/icons/Brightness2';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// interface Styles extends Partial<Record<SwitchClassKey, string>> {
//     focusVisible?: string;
// }

// interface Props extends SwitchProps {
//     classes: Styles;
// }

// const IOSSwitch = withStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             width: 42,
//             // height: 26,
//             padding: 0,
//             margin: theme.spacing(1),
//         },
//         switchBase: {
//             padding: 1,
//             '&$checked': {
//                 transform: 'translateX(16px)',
//                 color: theme.palette.common.white,
//                 '& + $track': {
//                     backgroundColor: '#52d869',
//                     opacity: 1,
//                     border: 'none',
//                 },
//             },
//             '&$focusVisible $thumb': {
//                 color: '#52d869',
//                 border: '6px solid #fff',
//             },
//         },
//         thumb: {
//             width: 24,
//             height: 24,
//         },
//         track: {
//             borderRadius: 26 / 2,
//             border: `1px solid ${theme.palette.grey[400]}`,
//             backgroundColor: theme.palette.grey[50],
//             opacity: 1,
//             height: 24,
//             transition: theme.transitions.create(['background-color', 'border']),
//         },
//         checked: {},
//         focusVisible: {},
//     }),
// )(({ classes, ...props }: Props) => {
//     return (
//         <Switch
//             focusVisibleClassName={classes.focusVisible}
//             disableRipple
//             classes={{
//                 root: classes.root,
//                 switchBase: classes.switchBase,
//                 thumb: classes.thumb,
//                 track: classes.track,
//                 checked: classes.checked,
//             }}
//             {...props}
//         />
//     );
// });

// type Props2 = {
//     /** color to use for the background */
//     checkedB?: boolean;
//     /** callback function passed to the onClick handler*/
//     setCheckedB: (event: boolean) => void;
// };

// const ThemeChanger: React.FC<Props2> = ({ checkedB, setCheckedB }) => {
//     const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//     const [themeState, setThemeState] = useState(prefersDarkMode); //porque empezamos con light WbSunnyIcon a la izquierda

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setCheckedB(event.target.checked);
//         setThemeState(!themeState); // es asincronico por eso al if va con true

//         if (event.target.checked) {
//             localStorage.setItem('Theme', 'dark');
//             document.body.classList.remove('light-mode');
//             document.body.classList.add('dark-mode');
//         } else {
//             localStorage.setItem('Theme', 'light');
//             document.body.classList.remove('dark-mode');
//             document.body.classList.add('light-mode');
//         }
//     };

//     useEffect(() => {
//         const getTheme = localStorage.getItem('Theme');
//         const condition = getTheme === 'dark' || getTheme === 'light' ? getTheme === 'dark' : prefersDarkMode;
//         if (condition) {
//             // esta en modo dark
//             // checked inicia en false osea a la izquierda el checked
//             setCheckedB(true); //porque WbSunnyIcon(sol) a la izquierda  y Brightness2Icon(luna) a la derecha(el activo)
//             document.body.classList.add('dark-mode');
//         }
//     });

//     return (
//         <div>
//             <WbSunnyIcon />
//             <IOSSwitch checked={checkedB} onChange={handleChange} name="checkedB" />
//             <Brightness2Icon />
//         </div>
//     );
// };

// export default ThemeChanger;

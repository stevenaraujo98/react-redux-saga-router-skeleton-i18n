// import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import { Visibility, VisibilityOff } from '@material-ui/icons';
// import LockIcon from '@material-ui/icons/Lock';
// import {
//     InputAdornment,
//     FormControl,
//     IconButton,
//     Input,
//     InputLabel,
//     OutlinedInput,
//     FilledInput,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//         },
//         margin: {
//             marginTop: theme.spacing(2),
//             marginBottom: theme.spacing(1),
//         },
//         textField: {
//             width: '25ch',
//         },
//     }),
// );

// // interface State {
// //     password: string;
// //     showPassword: boolean;
// // }

// interface Props extends PropsWithChildren<any> {
//     value: string;
//     // changeValue: Dispatch<SetStateAction<string>>;
//     // changeValue: Dispatch<string>;
//     changeValue: (k: string, val: string) => void;
//     id?: string;
//     label?: string;
//     required?: boolean;
//     startIcon?: boolean;
//     variant?: string;
//     labelWidth?: number;
// }

// export default function PasswordInput({
//     value,
//     changeValue,
//     id = 'password',
//     label = 'Contraseña',
//     required = false,
//     startIcon = false,
//     variant = '',
//     labelWidth = 100,
//     children,
// }: Props) {
//     const classes = useStyles();
//     const [values, setValues] = React.useState<State>({
//         password: '',
//         showPassword: false,
//     });

//     const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleClickShowPassword = () => {
//         setValues({ ...values, showPassword: !values.showPassword });
//     };

//     const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//     };

//     return (
//         <>
//             {variant === 'outlined' ? (
//                 <FormControl fullWidth className={classes.margin} variant="outlined">
//                     <InputLabel htmlFor={id}>
//                         {label} {required && '*'}
//                     </InputLabel>
//                     <OutlinedInput
//                         id={id}
//                         name="password"
//                         autoComplete="current-password"
//                         type={values.showPassword ? 'text' : 'password'}
//                         value={value}
//                         // onChange={handleChange('password')}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(id, event.target.value)}
//                         startAdornment={
//                             startIcon && (
//                                 <InputAdornment position="start">
//                                     <LockIcon />
//                                 </InputAdornment>
//                             )
//                         }
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     aria-label="toggle password visibility"
//                                     onClick={handleClickShowPassword}
//                                     onMouseDown={handleMouseDownPassword}
//                                 >
//                                     {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                                 </IconButton>
//                             </InputAdornment>
//                         }
//                         labelWidth={labelWidth}
//                     />
//                 </FormControl>
//             ) : variant === 'filled' ? (
//                 <FormControl fullWidth className={classes.margin} variant="filled">
//                     <InputLabel htmlFor={id}>
//                         {label} {required && '*'}
//                     </InputLabel>
//                     <FilledInput
//                         id={id}
//                         name="password"
//                         autoComplete="current-password"
//                         type={values.showPassword ? 'text' : 'password'}
//                         value={value}
//                         // onChange={handleChange('password')}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(id, event.target.value)}
//                         startAdornment={
//                             startIcon && (
//                                 <InputAdornment position="start">
//                                     <LockIcon />
//                                 </InputAdornment>
//                             )
//                         }
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     aria-label="toggle password visibility"
//                                     onClick={handleClickShowPassword}
//                                     onMouseDown={handleMouseDownPassword}
//                                 >
//                                     {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                                 </IconButton>
//                             </InputAdornment>
//                         }
//                     />
//                 </FormControl>
//             ) : (
//                 <FormControl fullWidth className={classes.margin}>
//                     <InputLabel htmlFor={id}>
//                         {label} {required && '*'}
//                     </InputLabel>
//                     <Input
//                         id={id}
//                         name="password"
//                         autoComplete="current-password"
//                         type={values.showPassword ? 'text' : 'password'}
//                         value={value}
//                         // onChange={handleChange('password')}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(id, event.target.value)}
//                         startAdornment={
//                             startIcon && (
//                                 <InputAdornment position="start">
//                                     <LockIcon />
//                                 </InputAdornment>
//                             )
//                         }
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     aria-label="toggle password visibility"
//                                     onClick={handleClickShowPassword}
//                                     onMouseDown={handleMouseDownPassword}
//                                 >
//                                     {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                                 </IconButton>
//                             </InputAdornment>
//                         }
//                     />
//                 </FormControl>
//             )}
//             {/*                         Input */}
//             {/* variant="filled"        FilledInput */}
//             {/* variant="outlined"      OutlinedInput       labelWidth={70}*/}
//         </>
//     );
// }

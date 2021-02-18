import {
  makeStyles,
  GridListTile,
  GridListTileBar,
  IconButton,
  Avatar,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    large: {
        fontSize: "2.5rem",
        width: 100,
        height: 100
    },
    tile: {
        height: "auto",
    }
    // avatar: {
    //     backgroundColor: red[500],
    // },
    // orangeAvatar: {
    //     margin: 10,
    //     color: '#fff',
    //     backgroundColor: deepOrange[500],
    // },
    // purpleAvatar: {
    //     margin: 10,
    //     color: '#fff',
    //     backgroundColor: deepPurple[500],
    // },
}));

const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
};



export const UserCard = ({ user }) => {
    const classes = useStyles();
    // const img = `https://randomuser.me/api/portraits/${user.gender}/${user.id}.jpg`;
    // const img = `https://randomuser.me/api/portraits/women/${user.id}.jpg`;
    // <Avatar className={classes[Math.floor(Math.random() * 3)]}.../>

    // return (
    //     <Avatar
    //         variant="square"
    //         // ref={setImageRef}
    //         // src={img}
    //         alt={user.name}
    //         className={classes.large}
    //         style={{
    //             backgroundColor: randomColor()
    //         }}
    //     >
    //         {user.name.charAt(0).toUpperCase()}
    //     </Avatar>
    // );

    return (
        <GridListTile className={classes.tile}>
            <Avatar
                variant="square"
                alt={user.name}
                className={classes.large}
                style={{
                    backgroundColor: randomColor()
                }}
            >
                {user.name.charAt(0).toUpperCase()}
            </Avatar>
            <GridListTileBar
                title={user.name}
                actionIcon={
                    <IconButton aria-label={`info about ${user.name}`} className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );

    // return (
    //     <GridListTile key={user.id}>
    //         <img src={img} alt={user.name} />
    //         <GridListTileBar
    //             title={user.name}
    //             actionIcon={
    //                 <IconButton aria-label={`info about ${user.name}`} className={classes.icon}>
    //                     <InfoIcon />
    //                 </IconButton>
    //             }
    //         />
    //     </GridListTile>
    // );
};

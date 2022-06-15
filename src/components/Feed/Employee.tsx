import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStyles from "./Style";

export default function Employee(props: any) {
  const classes = useStyles();

  return (
    // The below code is referred from https://mui.com/material-ui/react-card/#complex-interaction
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <div className={classes.flex}>
          <Typography variant="h5" component="div">
            {props.username}
          </Typography>
          <Button>Subscribe</Button>
        </div>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
        <div className={classes.lastRow}>
          <div>Score: {props.score}</div>
          <div>Badge: {props.badge}</div>
        </div>
      </CardContent>
    </Card>
  );
}

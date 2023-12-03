import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
   
  export default function LisAgent() {
    return (
      <Card className="w-96">
        <List>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                CHANTAL MANDRO
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                <p>temp</p>
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Alexander
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
              <p>temp</p>
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Emma Willever
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
              <p>temp</p>
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>
    );
  }
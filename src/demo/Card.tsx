import React from "react";
import { DemoPage, DemoSection } from "../components";
import {
  Card,
  CardMedia,
  CardTitle,
  CardContent,
  CardText,
  CardActions,
  Button,
} from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Card size="xl">
        <CardMedia image="//gw.alicdn.com/tfs/TB1Xv5_vlr0gK0jSZFnXXbRRXXa-427-240.png" />
        <CardTitle subtitle="subtitle">Card title</CardTitle>
        <CardText>Nội dung thẻ</CardText>
        <CardContent>Nội dung thẻ</CardContent>
        <CardActions>
          <Button>Default button</Button>
          <Button color="primary">Primary button</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardMedia
          aspectRatio="wide"
          image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
        />
        <CardTitle>Tiêu đề của tôi</CardTitle>
        <CardText>
          Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung
          khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội
          dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết
          nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi
          tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung
          Chi tiết nội dung khung
        </CardText>
        <CardActions>
          <Button>Đi đến để lại lời nhắn</Button>
          <Button color="primary">Gửi đánh giá</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardTitle>Tiêu đề của tôi</CardTitle>
        <CardText>
          Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung
          khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội
          dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết
          nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi
          tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung
          Chi tiết nội dung khung
        </CardText>
        <CardActions>
          <Button>Đi đến để lại lời nhắn</Button>
          <Button color="primary">Gửi đánh giá</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardText>
          Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung
          khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội
          dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết
          nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi
          tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung
          Chi tiết nội dung khung
        </CardText>
        <CardActions>
          <Button>Đi đến để lại lời nhắn</Button>
          <Button color="primary">Gửi đánh giá</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="Kích thước thẻ">
      <div className="demo-row">
        <Card size="xs">
          <CardText>xs</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="sm">
          <CardText>sm</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="md">
          <CardText>md</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="lg">
          <CardText>lg</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="xl">
          <CardText>xl</CardText>
        </Card>
      </div>
    </DemoSection>
    <DemoSection title="Chiều rộng tự động">
      <div className="demo-row">
        <Card fluid>
          <CardText>fluid</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card fluid="order">
          <CardText>fluid=order</CardText>
        </Card>
      </div>
    </DemoSection>
    <DemoSection title="Nút dọc">
      <Card size="xl">
        <CardText>
          Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung
          khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội
          dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết
          nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi
          tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung
          Chi tiết nội dung khung
        </CardText>
        <CardActions direction="column">
          <Button color="primary">Nút mạnh</Button>
          <Button>Nút yếu</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="Nút vô hiệu hóa">
      <Card size="xl">
        <CardText>
          Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung
          khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết nội
          dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi tiết
          nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung Chi
          tiết nội dung khung Chi tiết nội dung khung Chi tiết nội dung khung
          Chi tiết nội dung khung
        </CardText>
        <CardActions direction="column">
          <Button color="primary" disabled>
            Nút mạnh
          </Button>
          <Button disabled>Nút yếu</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="Thẻ truyền thông">
      <div className="demo-row">
        <Card size="xl">
          <CardMedia image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg" />
          <CardTitle>aspectRatio: square</CardTitle>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="xl">
          <CardMedia
            aspectRatio="wide"
            image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
          />
          <CardTitle>aspectRatio: wide</CardTitle>
        </Card>
      </div>
    </DemoSection>
  </DemoPage>
);

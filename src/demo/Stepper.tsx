import React from "react";
import { DemoPage, DemoSection } from "../components";
import { Stepper, Step } from "../src";

export default () => (
  <DemoPage>
    <DemoSection title="Cách sử dụng cơ bản">
      <Stepper current={3}>
        <Step
          title="Người mua yêu cầu hoàn tiền và trả hàng"
          desc="Hôm qua 12:00"
        />
        <Step
          title="Người bán xử lý yêu cầu"
          desc="Người bán còn 22 giờ 22 phút 22 giây để xử lý"
        />
        <Step
          title="Người mua điền thông tin trả hàng và vận chuyển"
          desc="Hôm qua 15:00"
        />
        <Step
          title="Người bán xác nhận nhận hàng và hoàn tiền"
          desc="Hôm qua 16:00"
        />
        <Step title="Hoàn tiền thành công" />
      </Stepper>
    </DemoSection>
    <DemoSection title="Đảo ngược thứ tự">
      <Stepper inverted>
        <Step
          title="Dịch vụ khách hàng đang xử lý"
          subTitle="05-23 11:23"
          desc="Dịch vụ khách hàng sẽ liên hệ với bạn trong vòng 24 giờ để xác minh vấn đề, vui lòng chú ý điện thoại."
        />
        <Step
          title="Bạn đã gửi yêu cầu khiếu nại"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>
                Lý do khiếu nại: Vấn đề vận chuyển, không giao đến điểm nhận đã
                chỉ định.
              </div>
              <div>
                Giải thích khiếu nại: Đã nói nhiều lần không giao đến trạm nhận
                hàng, nhưng vẫn giao đến đó.
              </div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
    <DemoSection title="Đảo ngược thứ tự & thành công">
      <Stepper inverted status="success">
        <Step
          title="Dịch vụ khách hàng quyết định, khiếu nại được chấp nhận"
          subTitle="05-23 11:23"
          desc="Dịch vụ khách hàng sẽ liên hệ với bạn trong vòng 24 giờ để xác minh vấn đề, vui lòng chú ý điện thoại."
        />
        <Step
          title="Bạn bổ sung lời nhắn"
          subTitle="05-23 11:23"
          desc="Người bán hứa sẽ giao hàng mà sao không giao, thái độ quá tệ!!"
        />
        <Step
          title="Người mua điền thông tin trả hàng và vận chuyển"
          subTitle="Hôm qua 15:00"
        />
        <Step
          title="Người bán xác nhận nhận hàng và hoàn tiền"
          subTitle="Hôm qua 16:00"
        />
        <Step title="Hoàn tiền thành công" />
      </Stepper>
    </DemoSection>
    <DemoSection title="Đảo ngược thứ tự & thất bại">
      <Stepper inverted status="fail">
        <Step
          title="Dịch vụ khách hàng quyết định, khiếu nại không được chấp nhận"
          subTitle="05-23 11:23"
          desc="Lý do: Xác minh đơn hàng vẫn trong thời gian giao hàng đã thỏa thuận, đã nhắc nhở người bán giao hàng, vui lòng chờ đợi."
        />
        <Step
          title="Dịch vụ khách hàng đang xử lý"
          subTitle="05-23 11:23"
          desc="Dịch vụ khách hàng sẽ liên hệ với bạn trong vòng 24 giờ để xác minh vấn đề, vui lòng chú ý điện thoại."
        />
        <Step
          title="Bạn đã gửi yêu cầu khiếu nại"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>
                Lý do khiếu nại: Vấn đề vận chuyển, không giao đến điểm nhận đã
                chỉ định.
              </div>
              <div>
                Giải thích khiếu nại: Đã nói nhiều lần không giao đến trạm nhận
                hàng, nhưng vẫn giao đến đó.
              </div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
    <DemoSection title="Đảo ngược thứ tự & hủy bỏ">
      <Stepper inverted status="abort">
        <Step
          title="Bạn đã hủy khiếu nại"
          subTitle="05-23 11:23"
          desc="Nếu có vấn đề xảy ra sau này, bạn có thể liên hệ với dịch vụ khách hàng."
        />
        <Step
          title="Dịch vụ khách hàng đang xử lý"
          subTitle="05-23 11:23"
          desc="Dịch vụ khách hàng sẽ liên hệ với bạn trong vòng 24 giờ để xác minh vấn đề, vui lòng chú ý điện thoại."
        />
        <Step
          title="Bạn đã gửi yêu cầu khiếu nại"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>
                Lý do khiếu nại: Vấn đề vận chuyển, không giao đến điểm nhận đã
                chỉ định.
              </div>
              <div>
                Giải thích khiếu nại: Đã nói nhiều lần không giao đến trạm nhận
                hàng, nhưng vẫn giao đến đó.
              </div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
  </DemoPage>
);

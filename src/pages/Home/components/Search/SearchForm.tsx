import Label from "@/components/common/Label";
import { Button, DatePicker, Input, Radio, Select, Switch } from "antd";
import { Formik } from "formik";
const { Search } = Input;
const { RangePicker } = DatePicker;

const SearchForm = () => {
  return (
    <>
      <Formik initialValues={{}} onSubmit={() => {}} validationSchema={{}}>
        <div className="mt-5 flex gap-5 max-[775px]:flex-col">
          {/* Col Left - 2/3 */}
          <div className="flex w-2/3 flex-col gap-10 max-[775px]:w-full">
            <div className="flex flex-col gap-1">
              <Label children="Từ khóa chính" />
              <Search placeholder="Tìm kiếm thông tin đấu thầu" onSearch={() => {}} enterButton="Tìm kiếm" className="grow" size="large" />
            </div>
            <div className="flex gap-3">
              <div className="flex w-2/5 flex-col gap-1">
                <Label children="Loại thông tin" />
                <Select options={[]} size="large" placeholder="Chọn loại thông tin" />
              </div>
              <div className="flex w-3/5 flex-col gap-1">
                <Label children="Khoảng thời gian công bố" />
                <RangePicker size="large" />
              </div>
            </div>
          </div>
          {/* Col Right - 1/3 */}
          <div className="flex w-1/3 flex-col max-[775px]:w-full">
            <div className="flex flex-col gap-1">
              <Label children="Thông tin dành cho" />
              <div className="flex">
                <Radio children="Nhà thầu" />
                <Radio children="Nhà đầu tư" />
                <Radio children="Đấu giá" />
              </div>
            </div>
            <div className="flex mt-4 items-center gap-2">
              <Switch />
              <span>Chỉ tìm theo tên hoặc mã</span>
            </div>
            <Button children="Tìm kiếm nâng cao" className="mt-auto" size="large" type="primary" ghost rootClassName="max-[1450px]:mt-5 w-[200px] self-end"/>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default SearchForm;

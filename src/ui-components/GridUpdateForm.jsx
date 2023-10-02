/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Grid as Grid0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GridUpdateForm(props) {
  const {
    id: idProp,
    grid: gridModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fname: "",
    width: "",
    height: "",
    stitch: "",
    offset: false,
    linebold: "",
    colors: [],
  };
  const [fname, setFname] = React.useState(initialValues.fname);
  const [width, setWidth] = React.useState(initialValues.width);
  const [height, setHeight] = React.useState(initialValues.height);
  const [stitch, setStitch] = React.useState(initialValues.stitch);
  const [offset, setOffset] = React.useState(initialValues.offset);
  const [linebold, setLinebold] = React.useState(initialValues.linebold);
  const [colors, setColors] = React.useState(initialValues.colors);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gridRecord
      ? { ...initialValues, ...gridRecord }
      : initialValues;
    setFname(cleanValues.fname);
    setWidth(cleanValues.width);
    setHeight(cleanValues.height);
    setStitch(cleanValues.stitch);
    setOffset(cleanValues.offset);
    setLinebold(cleanValues.linebold);
    setColors(cleanValues.colors ?? []);
    setCurrentColorsValue("");
    setErrors({});
  };
  const [gridRecord, setGridRecord] = React.useState(gridModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Grid0, idProp)
        : gridModelProp;
      setGridRecord(record);
    };
    queryData();
  }, [idProp, gridModelProp]);
  React.useEffect(resetStateValues, [gridRecord]);
  const [currentColorsValue, setCurrentColorsValue] = React.useState("");
  const colorsRef = React.createRef();
  const validations = {
    fname: [{ type: "Required" }],
    width: [{ type: "Required" }],
    height: [{ type: "Required" }],
    stitch: [{ type: "Required" }],
    offset: [{ type: "Required" }],
    linebold: [{ type: "Required" }],
    colors: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fname,
          width,
          height,
          stitch,
          offset,
          linebold,
          colors,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Grid0.copyOf(gridRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GridUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fname"
        isRequired={true}
        isReadOnly={false}
        value={fname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fname: value,
              width,
              height,
              stitch,
              offset,
              linebold,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.fname ?? value;
          }
          if (errors.fname?.hasError) {
            runValidationTasks("fname", value);
          }
          setFname(value);
        }}
        onBlur={() => runValidationTasks("fname", fname)}
        errorMessage={errors.fname?.errorMessage}
        hasError={errors.fname?.hasError}
        {...getOverrideProps(overrides, "fname")}
      ></TextField>
      <TextField
        label="Width"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={width}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fname,
              width: value,
              height,
              stitch,
              offset,
              linebold,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.width ?? value;
          }
          if (errors.width?.hasError) {
            runValidationTasks("width", value);
          }
          setWidth(value);
        }}
        onBlur={() => runValidationTasks("width", width)}
        errorMessage={errors.width?.errorMessage}
        hasError={errors.width?.hasError}
        {...getOverrideProps(overrides, "width")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={height}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fname,
              width,
              height: value,
              stitch,
              offset,
              linebold,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Stitch"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={stitch}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fname,
              width,
              height,
              stitch: value,
              offset,
              linebold,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.stitch ?? value;
          }
          if (errors.stitch?.hasError) {
            runValidationTasks("stitch", value);
          }
          setStitch(value);
        }}
        onBlur={() => runValidationTasks("stitch", stitch)}
        errorMessage={errors.stitch?.errorMessage}
        hasError={errors.stitch?.hasError}
        {...getOverrideProps(overrides, "stitch")}
      ></TextField>
      <SwitchField
        label="Offset"
        defaultChecked={false}
        isDisabled={false}
        isChecked={offset}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fname,
              width,
              height,
              stitch,
              offset: value,
              linebold,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.offset ?? value;
          }
          if (errors.offset?.hasError) {
            runValidationTasks("offset", value);
          }
          setOffset(value);
        }}
        onBlur={() => runValidationTasks("offset", offset)}
        errorMessage={errors.offset?.errorMessage}
        hasError={errors.offset?.hasError}
        {...getOverrideProps(overrides, "offset")}
      ></SwitchField>
      <TextField
        label="Linebold"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={linebold}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fname,
              width,
              height,
              stitch,
              offset,
              linebold: value,
              colors,
            };
            const result = onChange(modelFields);
            value = result?.linebold ?? value;
          }
          if (errors.linebold?.hasError) {
            runValidationTasks("linebold", value);
          }
          setLinebold(value);
        }}
        onBlur={() => runValidationTasks("linebold", linebold)}
        errorMessage={errors.linebold?.errorMessage}
        hasError={errors.linebold?.hasError}
        {...getOverrideProps(overrides, "linebold")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              fname,
              width,
              height,
              stitch,
              offset,
              linebold,
              colors: values,
            };
            const result = onChange(modelFields);
            values = result?.colors ?? values;
          }
          setColors(values);
          setCurrentColorsValue("");
        }}
        currentFieldValue={currentColorsValue}
        label={"Colors"}
        items={colors}
        hasError={errors?.colors?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("colors", currentColorsValue)
        }
        errorMessage={errors?.colors?.errorMessage}
        setFieldValue={setCurrentColorsValue}
        inputFieldRef={colorsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Colors"
          isRequired={true}
          isReadOnly={false}
          value={currentColorsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.colors?.hasError) {
              runValidationTasks("colors", value);
            }
            setCurrentColorsValue(value);
          }}
          onBlur={() => runValidationTasks("colors", currentColorsValue)}
          errorMessage={errors.colors?.errorMessage}
          hasError={errors.colors?.hasError}
          ref={colorsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "colors")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gridModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gridModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

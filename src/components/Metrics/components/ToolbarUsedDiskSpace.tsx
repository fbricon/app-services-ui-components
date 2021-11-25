import React, { FunctionComponent } from "react";
import {
  Button,
  CardActions,
  CardHeader,
  CardTitle,
  Divider,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import SyncIcon from "@patternfly/react-icons/dist/js/icons/sync-icon";
import { FilterByTime } from "./FilterByTime";
import { DurationOptions } from "../types";

type ToolbarUsedDiskSpaceProps = {
  title: string;
  isDisabled: boolean;
  isRefreshing: boolean;
  duration: DurationOptions;
  onSetTimeDuration: (value: DurationOptions) => void;
  onRefresh: () => void;
};
export const ToolbarUsedDiskSpace: FunctionComponent<ToolbarUsedDiskSpaceProps> = ({
  title,
  isDisabled,
  isRefreshing,
  duration,
  onSetTimeDuration,
  onRefresh,
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle component="h2">{title}</CardTitle>
        <CardActions>
          <Toolbar>
            <ToolbarContent>
              <FilterByTime
                duration={duration}
                onDurationChange={onSetTimeDuration}
                keyText={"kafka-metrics-time-filter"}
                disableToolbar={isDisabled}
              />
              <ToolbarItem>
                <Button
                  isLoading={isRefreshing}
                  variant="plain"
                  aria-label="sync"
                  onClick={onRefresh}
                >
                  {!isRefreshing && <SyncIcon />}
                </Button>
              </ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        </CardActions>
      </CardHeader>
      <Divider />
    </>
  );
};
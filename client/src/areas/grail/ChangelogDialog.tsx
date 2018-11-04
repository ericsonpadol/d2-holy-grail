import * as React from "react";
import { VersionManager } from "./VersionManager";
import CloseableDialog from "../../common/components/CloseableDialog";
import { DialogContentText } from "@material-ui/core";

export interface IChangelogDialogProps {
  onClose: () => any;
}

export const ChangelogDialog: React.SFC<IChangelogDialogProps> = props => {
  const changeLog = VersionManager.current.fullChangeLog;

  return (
    <CloseableDialog onDialogClosed={props.onClose} title="Changelog">
      <DialogContentText>
        {Object.keys(changeLog).map(version => {
          return (
            <div key={version}>
              <h3>{version}</h3>
              <ul>
                {changeLog[version].map(versionEntry => {
                  return <li key={versionEntry}>{versionEntry}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </DialogContentText>
    </CloseableDialog>
  );
};

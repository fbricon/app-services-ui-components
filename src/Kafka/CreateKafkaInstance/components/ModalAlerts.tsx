import { VoidFunctionComponent } from "react";
import {
  Alert,
  AlertVariant,
  Spinner,
  Button,
  ButtonVariant,
} from "@patternfly/react-core";
import { useTranslation, Trans } from "react-i18next";
import { InstanceAvailability } from "../machines";

export type ModalAlertsProps = {
  instanceAvailability: InstanceAvailability | undefined;
  isSystemUnavailable: boolean;
  isLoading: boolean;
  onClickPricingAndPurchasing?: () => void;
  /*isTesting flag is temporary for show some contet in storybook, not in productio. 
  It will be remove when actual data will available*/
  isTesting?: boolean;
};

export const ModalAlerts: VoidFunctionComponent<ModalAlertsProps> = ({
  instanceAvailability,
  isSystemUnavailable,
  isLoading,
  onClickPricingAndPurchasing,
  isTesting,
}) => {
  const { t } = useTranslation("create-kafka-instance");

  switch (true) {
    case isLoading:
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.info}
          title={t("checking_instance_title")}
          aria-live="polite"
          isInline
          customIcon={
            <Spinner
              size="md"
              aria-valuetext={t("checking_instance_message")}
            />
          }
        />
      );
    case isSystemUnavailable:
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.warning}
          title={t("modal_alerts.system_unavailable_title")}
          aria-live="polite"
          isInline
        >
          {t("modal_alerts.system_unavailable_message")}
        </Alert>
      );
    case isTesting && instanceAvailability === "trial":
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.info}
          title={t("modal_alerts.trial_available_title_storybook")}
          aria-live="polite"
          isInline
        >
          <Trans
            ns={["create-kafka-instance"]}
            i18nKey="modal_alerts.trial_available_message"
            components={[
              <Button
                key="btn-pricing-purchasing"
                variant={ButtonVariant.link}
                onClick={onClickPricingAndPurchasing}
                isInline
              />,
            ]}
          />
        </Alert>
      );
    //Todo: remove below case when large kafka api integration done
    case instanceAvailability === "trial":
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.info}
          title={t("modal_alerts.trial_available_title")}
          aria-live="polite"
          isInline
        />
      );
    case instanceAvailability === "over-quota":
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.warning}
          title={t("modal_alerts.over_quota_title")}
          aria-live="polite"
          isInline
        >
          {t("modal_alerts.over_quota_message")}
        </Alert>
      );
    case instanceAvailability === "trial-used":
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.warning}
          title={t("modal_alerts.trial_used_title")}
          aria-live="polite"
          isInline
        >
          {t("modal_alerts.trial_used_message")}
        </Alert>
      );
    case instanceAvailability === "trial-unavailable":
    case instanceAvailability === "regions-unavailable":
    case instanceAvailability === "instance-unavailable":
      return (
        <Alert
          id="mk-create-instance-quota-alert"
          className="pf-u-mb-md"
          variant={AlertVariant.warning}
          title={t("modal_alerts.instance_or_region_unavailable_title")}
          aria-live="polite"
          isInline
        >
          {t("modal_alerts.instance_or_region_unavailable_message")}
        </Alert>
      );
  }
  return null;
};
